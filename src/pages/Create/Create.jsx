import { Main } from "components/Main/Main";
import { PageTitle } from "components/PageTitle/PageTitle";
import { BackButton } from "components/BackButton/BackButton";
import { EventForm } from "components/EventForm/EventForm";

const Create = () => {
    return (
        <Main>
            <BackButton />
            <PageTitle title="Create new event" />
            <EventForm />  
        </Main>
    )
}

export default Create;