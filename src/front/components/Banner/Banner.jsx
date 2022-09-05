import styles from './Banner.module.scss';
import {Fragment} from "react";

export default function Banner(props) {
    const {schema} = props
    // Bannerのschemaの属性
    const schemaAttrs = schema.attributes
    //
    const {title, desc, showAvatar, avatarUrl, bgUrl, bgHeight} = schemaAttrs

    let styleObj = bgUrl ? {'backgroundImage': `url(${bgUrl})`} : {}
    bgHeight && (styleObj.height = bgHeight)
    return (<div className="wrapper">
        <div className={styles.banner} style={styleObj}>
            <div className={styles.person}>
                {(showAvatar && avatarUrl) ? <img className={styles.avatar} src={avatarUrl} alt={"Avatar"}/> : <Fragment/>}
                <div className={styles.content}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.desc}>{desc}</div>
                </div>
            </div>
        </div>
    </div>)
}
