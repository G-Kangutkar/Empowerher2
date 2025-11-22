const prodCategory = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
const count = prodCategory.reduce((res,category)=>{
    res[category] = (res[category]|| 0)+1;
    return res;
},{})
console.log(count)
const sorting = Object.entries(count).sort((a,b)=>b[1]-a[1])

console.log(sorting)