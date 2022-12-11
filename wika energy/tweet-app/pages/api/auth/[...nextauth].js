import NextAuth from "next-auth/next";
import TwitterProvider from "next-auth/providers/twitter"
import { version } from "react";

export default NextAuth({
    providers:[
        TwitterProvider({
            clientId:"MHFyTUI5NDRNMHhjM0JiSmRwNTc6MTpjaQ",
            clientSecret:"FJL4wgIklEVRv6cYATBL3gxnyjvg46b8CikSfYt1SkcEmkz1r8",
            version:"2.0"
        })
    ]
})