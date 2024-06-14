1. Created Model Folder 
        - created User.ts file
            - installed and imported mongoose, created interface and schemas in it for mongoose.
2. Created schemas Folder (for validations)
        - npm i zod
        - created signIn, signUp, acceptMessage, verify and message schema files in it.
        - made validations for all files 
3. db connection :
        - created lib
            -created dbConnection.ts file
            - db connected
4. Email verification-
        - Created lib/resend.ts file (resend library is used for email verification //check on google)
        - Created helpers/ sendVerificationEmail.ts file and imported resend from @lib/resend.ts
        - created emails folder in root 
                -created verificationEmail.tsx file in it (an email template)