const mainData = [
    {id:1,cruise:`Теплоход "Семен Буденный"	`,marshrut:"Саратов-Волгоград-Романовская-Старочеркасская-Ростов-на-Дону",category:"Комфорт",price:30100,peopole:299,days:5},
    {id:2,cruise:`Теплоход "Семен Буденный"	`,marshrut:"Ярославль-Кострома-Плес-Нижний Новгород-Чебоксары-Казань-Самара-Саратов-Волгоград",category:"Комфорт",price:58800,peopole:299,days:8},
    {id:3,cruise:`Теплоход "Семен Буденный"	`,marshrut:"Саратов-Волгоград-Романовская-Старочеркасская-Ростов-на-Дону-Романовская-Ильевка-День на борту-Астрахань-Волгоград-Саратов",category:"Комфорт",price:95000,peopole:299,days:14},
    {id:4,cruise:`Теплоход "Валерий Чкалов"	`,marshrut:"Самара-Чебоксары-Казань-Самара",category:"Стандарт",price:18100,peopole:167,days:5},
    {id:5,cruise:`Теплоход "Валерий Чкалов"	`,marshrut:"Саратов-Хвалынск-Самара-Тетюши-Казань-Самара-Саратов",category:"Стандарт",price:27600,peopole:167,days:7},
    {id:6,cruise:`Теплоход "Валерий Чкалов"	`,marshrut:"Самара-Баланово-Хвалынск-Самара",category:"Стандарт",price:9500,peopole:167,days:3},
    {id:7,cruise:`Теплоход "Александр Невский"	`,marshrut:"Саратов-Волгоград-Романовская-Старочеркасская-Ростов-на-Дону",category:"Комфорт",price:30100,peopole:232,days:3},
    {id:8,cruise:`Теплоход "Александр Невский"	`,marshrut:"Ярославль-Кострома-Плес-Нижний Новгород-Чебоксары-Казань-Самара-Саратов-Волгоград",category:"Комфорт",price:7600,peopole:232,days:4},
    {id:9,cruise:`Теплоход "Александр Невский"	`,marshrut:"Саратов-Волгоград-Романовская-Старочеркасская-Ростов-на-Дону-Романовская-Ильевка-День на борту-Астрахань-Волгоград-Саратов",category:"Комфорт",price:12300,peopole:232,days:7},
    {id:10,cruise:`Теплоход "Сергей Кучкин"	`,marshrut:"Самара-Казань-Самара",category:"Стандарт",price:19800,peopole:300,days:3},
    {id:11,cruise:`Теплоход "Сергей Кучкин"	`,marshrut:"Самара-Тольятти-Казань-Чебоксары-Козьмодемьянск-Нижний Новгород-Макарьево-Казань-Самара",category:"Стандарт",price:42500,peopole:300,days:6},
    {id:12,cruise:`Теплоход "Сергей Кучкин"	`,marshrut:"Нижний Новгород-Городец-Ярославль-Горицы-Кижи-Мандроги-Старая Ладыга-Санкт-Петербург",category:"Стандарт",price:57600,peopole:300,days:7},

]

const table = document.querySelector('.myTable')
const passag = document.querySelector('.passag')
const passag2 = document.querySelector('.passag2')
const currentData = [...mainData]
let passagValue,passag2Value

const doubleSort = (data,e) => {
    return 
}


passag.addEventListener('keyup',(e) => {

    if(+passag.value != 0 && +passag2.value != 0){
        const newData = currentData.filter((item) => {
            
            return item.peopole <= +passag.value && item.days == +passag2.value
            
        })
        table.innerHTML = ""
        render(newData)
        
    } 
    else if(!passag.value  && !passag2.value ){
        table.innerHTML = ""
        render(mainData)
    }
    else {
        const newData = currentData.filter((item) => {
            return item.peopole <= +e.target.value
        })
    
        table.innerHTML = ""
        render(newData)
        
    }
})

passag2.addEventListener('keyup',(e) => {
   
    if(+passag.value != 0 && +passag2.value != 0){
        const newData = currentData.filter((item) => {
        
            return item.peopole <= +passag.value && item.days == +passag2.value
        })
         table.innerHTML = ""
        render(newData)
        return
    } 
    else if(!passag.value  && !passag2.value ){
        table.innerHTML = ""
        render(mainData)
    }
    else {
    const newData = currentData.filter((item) => {
         return item.days == +e.target.value
    })
    table.innerHTML = ""
    render(newData)
    
}
   
})


const render = (data) => {
    table.innerHTML += `<tr><th>Круиз<th>Маршрут следования<th>Категория<th>Цена р./чел<th>Вмещаемость пассажиров<th>Длительность круиза в днях</tr>`
    for(let i = 0; i < data.length ; i++) {
       table.innerHTML +=  `<tr><td id=${data[i].id}>${data[i].cruise}</td><td>${data[i].marshrut}</td><td>${data[i].marshrut}</td><td>${data[i].price}</td><td>${data[i].peopole}</td><td>${data[i].days}</td></tr>`
 
    }
}


render(mainData)