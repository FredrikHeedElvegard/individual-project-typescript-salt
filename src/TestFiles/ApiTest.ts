export function APITest1()
{
    fetch("https://api.tcgdex.net/v2/en/cards/base1-4").then((res) => res.json()).then((data) => {
        
        console.log(data);

        console.log(data.name);

        console.log("High prize is " + data.pricing.cardmarket.avg);
    })

 /*    fetch("https://api.tcgdex.net/v2/en/cards?name=lugia")
        .then((res) => res.json())
        .then((data)  => {

        console.log(data[1]);

            
            fetch(`https://api.tcgdex.net/v2/en/cards/${data[1].id}`).then((res) => res.json())
                .then((data2) =>
                {
                    console.log("Prize for lugia is " + data2.pricing.cardmarket.avg);
            })
        }) */
    
}

export async function APITest2() {
    const rawData = await fetch("https://api.tcgdex.net/v2/en/cards?name=lugia");

    const jsonObj = await rawData.json();

    const rawNeoLugia = await fetch(`https://api.tcgdex.net/v2/en/cards/${jsonObj[1].id}`);

    const neoLugiaGenesis = await rawNeoLugia.json();

    console.log("Lugia prize is " + neoLugiaGenesis.pricing.cardmarket.avg);

}