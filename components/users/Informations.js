import Image from 'next/image';
import userStyles from '../../styles/User.module.css'
const Information = ({ user }) => {
    return (
        <div>
            <div className={userStyles.Contacts}>
                <h1 className={userStyles.sectionTitle}>Contact Info</h1>
                <section>
                    <h3 className={userStyles.dataInfo}><Image src='/username-logo.png' width={35} height={35}></Image>{user.username}</h3>
                    <h3 className={userStyles.dataInfo}> <Image src='/email-logo.jpg' width={35} height={35}></Image> {user.email}</h3>
                    <h3 className={userStyles.dataInfo}> <Image src='/phone-logo.jpg' width={35} height={35}></Image>{user.phone}</h3>
                    <h3 className={userStyles.dataInfo} > <Image src='/website-logo.png' width={35} height={35}></Image>{user.website}</h3>
                </section>
            </div>
            <hr />
            <section>
                <h1 className={userStyles.sectionTitle}>Address Info</h1>
                <h3 className={userStyles.dataInfo}><Image src='/address-logo.png' width={35} height={35}></Image>{user.address.street}
                    , {user.address.suite} , {user.address.city}</h3>
                <h3 className={userStyles.dataInfo} ><Image src='/geography-logo.jpg' width={35} height={35}></Image> {user.address.geo.lat}  ,
                    {user.address.geo.lng}</h3>
            </section>
            <hr />
            <section>
                <h1 className={userStyles.sectionTitle}> Work</h1>
                <div>
                    <h3 className={userStyles.dataInfo}> Works at {user.company.name} </h3>
                    <h3 className={userStyles.dataInfo}> Catch Phrase is  {user.company.catchPhrase}</h3>
                    <h3 className={userStyles.dataInfo}> Bs is {user.company.bs}</h3>
                </div>
            </section>

        </div>);
}

export default Information;