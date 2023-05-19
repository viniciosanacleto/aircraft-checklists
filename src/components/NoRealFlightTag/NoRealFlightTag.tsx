import style from "./NoRealFlightTag.module.scss"

export default function NoRealFlightTag(){
    return (
        <div className={style.NoRealFlightTag}>
            <div className={style.Flag}>
                <div className={style.Division}/>
            </div>
            <div className={style.Text}>NOT INTENDED TO BE USED IN REAL FLIGHTS. FLIGHT SIM ONLY.</div>
        </div>
    )
}