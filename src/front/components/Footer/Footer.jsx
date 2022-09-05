import styles from './Footer.module.scss';

export default function Footer(props) {
  const {schema = {}} = props
  // Footerのschemaの属性
  const {attributes = {}, children: schemaChildren = []} = schema
  return (
      <div className="wrapper">
        <div className={styles.footer}>
          <ul className={styles.list}>
            {
              schemaChildren.map((schemaItem) => (
                  <li className={styles.item} key={schemaItem.id}>
                    {schemaItem.link.indexOf('admin.html') !== -1 ?
                        <a className={styles.link} href={schemaItem.link}>{schemaItem.title}</a> :
                        <a className={styles.link} href={schemaItem.link} target="_blank"
                           rel="noreferrer">{schemaItem.title}</a>
                    }
                  </li>
              ))
            }
          </ul>
          <div className={styles.copyright}>
            Copyright © {attributes.copyright}
          </div>
        </div>
      </div>
  );
}
