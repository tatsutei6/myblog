import styles from './BlogList.module.scss';

const BlogList = (props) => {
    const {schema = {}} = props
    // BlogListのschemaの属性
    const {children:schemaChildren = []} = schema
    return (
        <div className="wrapper">
            <ul className={styles.list}>
                {
                    schemaChildren.map((schemaItem) => (
                        <li className={styles.item} key={schemaItem.id}>
                            <a href={schemaItem.link} className={styles.link}>
                                <img className={styles.img}
                                     src={schemaItem.imgUrl}
                                     alt=""/>
                                <h4 className={styles.title}>{schemaItem.title}</h4>
                                <p className={styles.desc}>
                                    {schemaItem.desc}
                                </p>
                            </a>
                        </li>

                    ))
                }
            </ul>
        </div>
    );
}

export default BlogList
