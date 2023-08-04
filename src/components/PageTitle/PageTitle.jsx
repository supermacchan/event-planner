import css from "./PageTitle.module.css"

export const PageTitle = ({ title }) => {
    return (
        <h2 className={css.title}>
            {title}
        </h2>
    )
}