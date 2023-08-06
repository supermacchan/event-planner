import { Main } from "components/Main/Main";
import { BackButton } from "components/BackButton/BackButton";
import { PageTitle } from "components/PageTitle/PageTitle";
import css from "./NotFound.module.css"

const NotFound = () => {
    return (
        <Main>
            <BackButton />
            <PageTitle title="Page not found" />
            <div className={css.message}> 
                <h3 className={css.subtitle}>The page you are looking for does not exist.</h3>
                <p className={css.note}>
                    You will be redirected to the Home page in a few seconds.
                </p>
            </div>
        </Main>
    )
}

export default NotFound;