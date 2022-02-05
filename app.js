const membersNumber = document.getElementById('membersNumber');
const attendeesNumber = document.getElementById('attendeesNumber');
const tbody = document.getElementById('bodyy');
const datatable = document.getElementById('bootstrap-data-table');

const getMembers = () => {
     fetch('https://church-api.vercel.app/api/attendeese').then(res => res.json()).then(data => {
         membersNumber.innerText = data.attendeese.length;
         localStorage.setItem('attendeese', JSON.stringify(data.attendeese));
     })

}

const getAtte = () => {
    fetch('https://church-api.vercel.app/api/attendance').then(res => res.json()).then(data => {
        attendeesNumber.innerText = data.attendance.length;
        localStorage.setItem("attendance", JSON.stringify(data.attendance));
        console.log(JSON.parse(localStorage.getItem('attendance')));
    })

}

getAtte();
getMembers();
const attendance = JSON.parse(localStorage.getItem('attendance'));
const attendeeses = JSON.parse(localStorage.getItem('attendeese'));
$(document).ready(function() {
    $.fn.dataTable.ext.errMode = 'none';
    if ( !$.fn.dataTable.isDataTable( '#' ) ) {
        table = $('#bootst-data-table').DataTable({
            bJQueryUI: true,
            aaData: attendance,
            aoColumns: [
                    { mData: 'names', "fnRender": function( oObj ) { return oObj.aData[1].names}},
                    { mData: 'phone' ,"fnRender": function( oObj ) { return oObj.aData[1].phone }},
                    { mData: 'temp',"fnRender": function( oObj ) { return oObj.aData[1].temp } },
                    { mData: 'date',"fnRender": function( oObj ) { return oObj.aData[1].date } }
            ]
        });
    }
});

$(document).ready(function() {
    $.fn.dataTable.ext.errMode = 'none';
    if ( !$.fn.dataTable.isDataTable( '#' ) ) {
        table = $('#bootst1-data-table').DataTable({
            bJQueryUI: true,
            aaData: attendeeses,
            aoColumns: [
                    { mData: 'names', "fnRender": function( oObj ) { return oObj.aData[1].names}},
                    { mData: 'phone' ,"fnRender": function( oObj ) { return oObj.aData[1].phone }},
                    { mData: 'address.District',"fnRender": function( oObj ) { return oObj.aData[1].address.District }},
                    { mData: 'address.Sector',"fnRender": function( oObj ) { return oObj.aData[1].address.Sector }},
                    { mData: 'doses',"fnRender": function( oObj ) { return oObj.aData[1].doses } },
                    { mData: 'vaccineCode',"fnRender": function( oObj ) { return oObj.aData[1].vaccineCode } }

            ]
        });
    }
});