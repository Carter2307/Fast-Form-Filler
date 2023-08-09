import logoUrl from "../../assets/favicon.png"

export function Logo() {
    return <div className="logo">
        <img className="logo__img" src={logo} alt="" />
        <h4 className="logo__title">Fast Form Filler</h4>
    </div>
}
