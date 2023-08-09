import logoUrl from "../../assets/favicon.png"

export function Logo() {
    return <div className="logo">
        <img className="logo__img" src={logoUrl} alt="Fast form filler logo" />
        <h4 className="logo__title">Fast Form Filler</h4>
    </div>
}
