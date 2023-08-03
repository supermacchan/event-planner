import { Oval } from "react-loader-spinner";
import { Container } from "./Loader.styled";

export const Loader = () => {
    return (
        <Container>
            <Oval
                height={80}
                width={80}
                color="#3F3F3F"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel='oval-loading'
                secondaryColor="#7B61FF"
                strokeWidth={2}
                strokeWidthSecondary={2}
            />
        </Container>
    )
}