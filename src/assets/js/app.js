// Toggle menu
$.fn.toggleAttrVal = function(attr, val1, val2) {
    var test = $(this).attr(attr);
    if ( test === val1) {
        $(this).attr(attr, val2);
        return this;
    }
    if ( test === val2) {
        $(this).attr(attr, val1);
        return this;
    }
    // default to val1 if neither
    $(this).attr(attr, val1);
    return this;
};

$('a[href="#"').click(function (e) {
    e.preventDefault()
});

$(".menu-toggle").click(function() {
    $("body").toggleClass("sidebar-closed");
    $('#menuOpen').toggleClass('hidden');
    $('#menuClose').toggleClass('hidden')
});

// Toggle menu
$(".menu-item > a, .submenu-item > a").click(function (e) {
    // e.preventDefault()
    // $(this).parent().siblings().removeClass("open");
    $(this).parent().siblings().removeClass("active");
    $(this).parent().addClass("active");
});
$(".has-submenu > a").click(function () {
    $(this).parent().siblings().removeClass("open");
    $(this).parent().toggleClass("open");
});

$(document).ready(function () {
    var submenuItemsHeight = $(".submenu-items").height() + "px";
    $(".submenu-items").attr("style", `--submenuItemsHeight: ${submenuItemsHeight}`);
    // $(".submenu-items").addClass("ready");
});


// Tabs
$('#navTabs a').click(function () {
    $('#navTabs li').removeClass('active');
    $(this).parent().addClass('active');
})
$('#tabDash').click(function() {
    $('#users').toggleClass('active');
    $('#dashboard').toggleClass('active');
})
$('#tabNav').click(function() {
    $('#dashboard').toggleClass('active');
    $('#users').toggleClass('active');
})

// Toggle filter label
$('#filter-label-toggle').click(function() {
    $('.table-filters').toggleClass('hidden');
})

// Table
$('tr').click(function() {
    $(this).toggleClass('active');
    $(this).find('.checkbox').toggleClass('fa-square fa-check-square')
})

// Dropdown
$('.dropdown-toggle').click(function(e){
    e.preventDefault()
    $(this).parent('.dropdown').toggleClass('open');
});

// Modal
$('#filter-modal').click(function() {
    $('body').toggleClass('modal-open');
    $('#modal').toggleClass('open');
})
$('.modal-close').click(function() {
    $('body').toggleClass('modal-open');
    $('#modal').toggleClass('open');
});

// Panel toggle
$('.panel-header a').click(function() {
    $(this).parent().parent().toggleClass('open');
    $(this).children('.icon').toggleClass('fa-plus fa-minus')
})











// BAR CHART
var barChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [{
        label: 'Compute',
        backgroundColor: 'rgba(99, 134, 197, 0.7)',
        data: [
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute(),
            randomScalingFactorCompute()
        ]
    }, {
        label: 'Block volume',
        backgroundColor: 'rgba(94, 37, 114, 0.7)',
        data: [
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock(),
            randomScalingFactorBlock()
        ]
    }, {
        label: 'Object storage',
        backgroundColor: 'rgba(74, 185, 177, 0.7)',
        data: [
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject(),
            randomScalingFactorObject()
        ]
    }, {
        label: 'Database',
        backgroundColor: 'rgba(223, 225, 38, 0.7)',
        data: [
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase(),
            randomScalingFactorDatabase()
        ]
    }, {
        label: 'Java',
        backgroundColor: 'rgba(225, 38, 72, 0.7)',
        data: [
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava (),
            randomScalingFactorJava ()
        ]
    }]

};









// PIE CHART
var randomScalingFactor = function() {
    return Math.round(Math.random() * 100);
};

var config = {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
            ],
            backgroundColor: [
                'rgba(99, 134, 197, 0.7)',
                'rgba(94, 37, 114, 0.7)',
                'rgba(74, 185, 177, 0.7)',
                'rgba(223, 225, 38, 0.7)',
                'rgba(225, 38, 72, 0.7)',
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Compute',
            'Block volume',
            'Object storage',
            'Database',
            'Java'
        ]
    },
    options: {
        responsive: true,
        // maintainAspectRatio : false,
        legend: {
            position: 'top',
            labels: {
                // padding: 20
            }
        },
        layout: {
            padding: {
                top: 40,
                bottom: 50
            }
        }
    }
};


///////////////////////////////
// LOAD CHARTS
//////////////////////////////
window.onload = function() {

    // Bar chart
    var ctx = document.getElementById('chartCostHistory').getContext('2d');
    window.myBar = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            tooltips: {
                mode: 'index',
                intersect: false
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });

    // Pie chart
    var ctxPie = document.getElementById('chartCostThisMonth').getContext('2d');
    window.myPie = new Chart(ctxPie, config);
};