import {
    Html,Head,Body,Title,Paragraph,Link,Button
}
from 'react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail(props: VerificationEmailProps) {
    return (
        <Html>
            <Head>
                <Title>Verify your email address</Title>
            </Head>
            <Body>
                <Paragraph>
                    Hi {props.username},
                </Paragraph>
                <Paragraph>
                    Please verify your email address by clicking the button below.
                </Paragraph>
                <Link href={`http://example.com/verify?otp=${props.otp}`}>
                    <Button>Verify Email</Button>
                </Link>
            </Body>
        </Html>
    );
}