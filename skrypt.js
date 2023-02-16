function Oblicz() {
    let liczbaN=parseInt(document.getElementById("liczba").value);
    let liczbaFn=0;
    if(liczbaN<=2){
        Fn=1;
    }else{
        let liczbai=3;
        let liczbaF1=1;
        let liczbaF2=1;

        while(liczbai<=liczbaN){
            liczbaFn=liczbaF1+liczbaF2;
            liczbaF1=liczbaF2;
            liczbaF2=liczbaFn;
            liczbai=liczbai+1;

        }
    }
    document.getElementById("wynik").value=liczbaFn;
}
