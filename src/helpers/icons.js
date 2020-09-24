import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserTie, faInfo, faMailBulk, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
    return library.add(
        faUserTie,
        faInfo,
        faMailBulk,
        faMobileAlt
    )
};

export default Icons;