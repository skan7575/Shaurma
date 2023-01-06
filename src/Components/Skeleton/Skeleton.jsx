import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonProduct = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={480}
        viewBox="0 0 280 480"
        backgroundColor="#878787"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="14" y="14" rx="38" ry="38" width="260" height="260" />
        <rect x="19" y="292" rx="0" ry="0" width="254" height="65" />
        <rect x="204" y="323" rx="0" ry="0" width="25" height="2" />
        <rect x="22" y="375" rx="0" ry="0" width="105" height="27" />
        <rect x="187" y="377" rx="0" ry="0" width="81" height="25" />
    </ContentLoader>
)

export default SkeletonProduct