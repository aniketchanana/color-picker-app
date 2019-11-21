export default {
    up(){

    },
    down(size){
        const sizes = {
            xs:"575.98",
            sm:"767.98",
            md:"991.98",
            lg:"1199.98"
        }
        return `@media (max-width: ${sizes[size]}px)`
    }
}

// export default function down(size){
//     const sizes = {
//         xs:"575.98",
//         sm:"767.98",
//         md:"991.98"
//     }
//     return `@media (max-width: ${sizes[size]})`
// }

// export default {
//     xs:"@media (max-width: 575)",
//     sm:"@media (max-width: 767)",
//     md:"@media (max-width: 991)"
// }