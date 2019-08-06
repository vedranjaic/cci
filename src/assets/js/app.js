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

// Collapser
$('.collapse-toggle').click(function(e) {
    e.preventDefault()
    $(this).parent().toggleClass('collapse-open-true');
})
$('.faq .collapse-toggle').click(function(e) {
    e.preventDefault()
    $(this).parent().toggleClass('active');
})

// TEMP COLLAPSE
$('#temp-help-01-toggle').click(function(e) {
    e.preventDefault()
    $('#temp-help-01').toggleClass('collapse-open-true label-help').delay(1000).queue(function(next){
        $(this).removeClass('label-help');
        next();
    });
})
$('#temp-help-02-toggle').click(function(e) {
    e.preventDefault()
    $('#temp-help-02').toggleClass('collapse-open-true label-help').delay(1000).queue(function(next){
        $(this).removeClass('label-help');
        next();
    });
})







Chart.defaults.scale.gridLines.display = false;

// BAR CHART
var barChartData = {
    labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
    datasets: [{
        label: 'Compute',
        backgroundColor: 'rgba(255,49,81, 0.9)',
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
        backgroundColor: 'rgba(255,49,81, 0.7)',
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
        backgroundColor: 'rgba(255,49,81, 0.5)',
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
        backgroundColor: 'rgba(255,49,81, 0.3)',
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
        backgroundColor: 'rgba(255,49,81, 0.1)',
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
                'rgba(255,49,81, 0.9)',
                'rgba(255,49,81, 0.7)',
                'rgba(255,49,81, 0.5)',
                'rgba(255,49,81, 0.3)',
                'rgba(255,49,81, 0.1)',
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
                    categoryPercentage: 0.9,
                    barPercentage: 0.9,
                    ticks: {
                        fontColor: "#aaa",
                        display: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    display: false,
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    });

    // Pie chart
    var ctxPie = document.getElementById('chartCostThisMonth').getContext('2d');
    window.myPie = new Chart(ctxPie, config);
};