const palindromes = function (st) {
    let s=""
    for(let i=0;i<st.length;i++){

        a=st.at(i)
        if(!((a>='a' && a<='z') || (a>='A' && a<='Z') || (a>='0' && a<='9'))) continue;
        c=a.toLowerCase()
        s+=c
    }
    rev=''
    for(let i=s.length-1;i>=0;i--){
        rev+=s.at(i)

    }
    if(rev==s) return true
    else return false

};

// Do not edit below this line
module.exports = palindromes;
