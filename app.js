const membersNumber = document.getElementById('membersNumber');
const attendeesNumber = document.getElementById('attendeesNumber');

const getMembers = async () => {
    const data = await fetch('https://church-api.vercel.app/api/attendeese');
    console.log(data);

}

getMembers();