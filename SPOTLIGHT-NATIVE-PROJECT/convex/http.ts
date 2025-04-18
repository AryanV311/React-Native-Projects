import {httpRouter} from "convex/server";
import { httpAction } from "./_generated/server";
import {Webhook} from "svix";
import { api } from "./_generated/api";

const http = httpRouter();

http.route({
    path:"/clerk-webhook",
    method:"POST",
    handler: httpAction(async(ctx, request) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
        // console.log("webhookkk", webhookSecret); 
        
        if(!webhookSecret){
            throw new Error("Missing CLERK_WEBHOOK_SECRET environment variable")
        }

        const svix_id = request.headers.get("svix-id")
        const svix_signature = request.headers.get("svix-signature")
        const svix_timestamp = request.headers.get("svix-timestamp")

        if(!svix_id || !svix_signature || !svix_timestamp){
            return new Response("Error occured -- no svix headers", {
                status:400,
            });
        }

        const payload = await request.json();
        const body = JSON.stringify(payload);

        console.log("bodyyy:", body);

        const wh = new Webhook(webhookSecret)

        let evt:any;

        try {
            evt = wh.verify(body, {
                "svix-id":svix_id,
                "svix-signature":svix_signature,
                "svix-timestamp":svix_timestamp
            }) as any;
        } catch (error) {
            console.error("Error verifying webhook:", error);
            return new Response("Error occurred",{status:400});
        }

        let eventType = evt.type;

        console.log("eventType::", eventType);

        if(eventType === "user.created"){
            console.log("datata", evt.data);
            const {id, email_addresses, first_name, last_name, image_url} = evt.data;

            const email = email_addresses?.[0]?.email_address || "no-email";
            const name = `${first_name || ""} ${last_name || ""}`.trim();

            try {
                const result = await ctx.runMutation(api.users.createUser, {
                    email,
                    fullname: name,
                    image: image_url,
                    clerkId: id,
                    username: email.split("@")[0],
                  });
                  console.log("User created successfully:", result);
            } catch (error) {
                console.log("Error creating user:", error);
                return new Response("Error Creating user ", {status:400})
            }
        }

        return new Response("Webhook created successfully", { status: 200 })

    })
})


export default http;