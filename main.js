const data = [
    {
        name:'Mark Webber',
        action:'reacted to your recent post',
        event:'My first tournament today!',
        time:'1m ago',
        img:"'./assets/images/avatar-mark-webber.webp'",
        msg:'',
        img_s:''
    },
    {
        name:'Angela Gray',
        action:'followed you',
        event:'',
        time:'5m ago',
        img:"'./assets/images/avatar-angela-gray.webp'",
        msg:'',
        img_s:''
    },
    {
        name:'Jacob Thompson',
        action:'has joined your group',
        event:'Chess Club',
        time:'1 day ago',
        img:"'./assets/images/avatar-jacob-thompson.webp'",
        msg:'',
        img_s:''
    },
    {
        name:'Rizky Hasanuddin',
        action:'sent you a private message',
        event:'',
        time:'5 days ago',
        img:"'./assets/images/avatar-rizky-hasanuddin.webp'",
        msg:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        img_s:''
    },
    {
        name:'Kimberly Smith',
        action:'commented on your picture',
        event:'',
        time:'1 week ago',
        img:"'./assets/images/avatar-kimberly-smith.webp'",
        msg:"",
        img_s:"'./assets/images/image-chess.webp'"
    },
    {
        name:'Nathan Peterson',
        action:'reacted to your recent post 5 end-game strategies to increase your win rate',
        event:'',
        time:'2 weeks ago',
        img:"'./assets/images/avatar-nathan-peterson.webp'",
        msg:"",
        img_s:''
    },
    {
        name:'Anna Kim',
        action:'left the group',
        event:'Chess Club',
        time:'2 weeks ago',
        img:"'./assets/images/avatar-anna-kim.webp'",
        msg:"",
        img_s:''
    }
]

let list = document.getElementById('list')
let numb =document.getElementById('number');
const count = ()=>{
    let number = document.querySelectorAll('.unread').length
    numb.innerText = number.toString();
}

let cleanCode = ()=>{
    const desc = document.querySelectorAll('.desc');
    const s_img = document.querySelectorAll('.s_img');
    desc.forEach((item)=>{
        if(item.innerText===''){
            item.style.display='none';
        }
        else{
            item.style.display='block';
        }
    })
    s_img.forEach((item)=>{
        if(item.src===''){
            item.style.display='none';
        }
        else{
            item.style.display='block';
        }
    })
}

let html = data.map((item) => {
    return `<div class='notification unread'>
        <img src=${item.img} alt='avatar' class='avatar'>
            <div class='content'>
                <div class='title'>
                    <span  class="rel_dot"><a href='#'>${item.name}</a> &nbsp; ${item.action} &nbsp;<a href='#'>${item.event}</a></span>
                    <img src=${item.img_s} class='s_img' alt=''>
                </div>
                <p class='time'>${item.time}</p>
                <div class='desc'>
                    <p>${item.msg}</p>
                </div>
                
            </div>
    </div>`
})
list.innerHTML=html.join('');
count();
cleanCode()
let notif = document.querySelectorAll('.notification');
notif.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        if(e.target.className==='notification unread'){
            let title = e.target.querySelector('.title');
            title.style.setProperty('--visible', 'hidden');
            item.classList.remove('unread');
            count()
        }
    })
})
let read = document.getElementById('readAll');
read.addEventListener('click',()=>{
    notif.forEach((item)=>{
            let title = item.querySelector('.title');
            title.style.setProperty('--visible', 'hidden');
            item.classList.remove('unread');
    })
    count()
})
