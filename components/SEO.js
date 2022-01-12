import Head from "next/head"
import {useRouter} from 'next/router'

const SEO = ({title, description, image, url}) => {




 const router = useRouter()






    return(
        <>
        <Head>
            <title>{title}</title>
        <meta name="description" content={description}/>
        <meta name="subject" content="your website's subject"/>
        <meta name="copyright"content="TJM Landscapes"/>
        <meta name="language" content="en_gb"/>
        <meta name="robots" content="index,follow" />
        <meta name="Classification" content="Business"/>
        <meta name="url" content={url}/>

        <meta name="og:title" content={title}/>
<meta name="og:url" content={url}/>
<meta name="og:image" content={image}/>
<meta name="og:site_name" content="TJM Landscapes"/>
<meta name="og:description" content={description}/>

<meta name="apple-mobile-web-app-capable" content="yes"/>
<meta content="yes" name="apple-touch-fullscreen" />
<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
<meta name="format-detection" content="telephone=no"/>
<meta name="viewport" content="width = 320, initial-scale = 2.3, user-scalable = no"/>

        </Head>
        </>
    )

}


export default SEO


