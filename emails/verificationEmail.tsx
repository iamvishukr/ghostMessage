import {
    Html,
    Head,
    Preview,
    Heading,
    Row,
    Section,
    Text,
    Button
} from '@react-email/components';

interface verifcationEmailProps{
    username: string,
    otp: string
}

export default function verificationEmail({username, otp} : verifcationEmailProps){
    return(
    
       <Html lang="en" dir='ltr'>
       <Head>
        <title>Verification code</title>
       </Head>
       <Preview>Here&apos;s your verification code: {otp}</Preview>
       <Section>
        <Row>
            <Heading as="h2">Hello {username},</Heading>
        </Row>
        <Row>
        <Text>Thankyou for registering. Please use the following verification code to complete registration:</Text>
        </Row>
        <Row>
            {otp}
        </Row>
        <Row>
            <Text>
                If you did not request this code, Please ignore this email.
            </Text>
        </Row>
       </Section>
       </Html> 
    )

}