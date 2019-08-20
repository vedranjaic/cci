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






// Disable grid in Chart.js
Chart.defaults.scale.gridLines.display = false;

// Extend Chart.js to curve the top bars
// draws a rectangle with a rounded top
Chart.helpers.drawRoundedTopRectangle = function(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    // top right corner
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    // bottom right   corner
    ctx.lineTo(x + width, y + height);
    // bottom left corner
    ctx.lineTo(x, y + height);
    // top left   
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
  };
  
  Chart.elements.RoundedTopRectangle = Chart.elements.Rectangle.extend({
    draw: function() {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var left, right, top, bottom, signX, signY, borderSkipped;
      var borderWidth = vm.borderWidth;
  
      if (!vm.horizontal) {
        // bar
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top? 1: -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        // horizontal bar
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left? 1: -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }
  
      // Canvas doesn't allow us to stroke inside the width so we can
      // adjust the sizes to fit if we're setting a stroke on the line
      if (borderWidth) {
        // borderWidth shold be less than bar width and bar height.
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize? barSize: borderWidth;
        var halfStroke = borderWidth / 2;
        // Adjust borderWidth when bar top position is near vm.base(zero).
        var borderLeft = left + (borderSkipped !== 'left'? halfStroke * signX: 0);
        var borderRight = right + (borderSkipped !== 'right'? -halfStroke * signX: 0);
        var borderTop = top + (borderSkipped !== 'top'? halfStroke * signY: 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom'? -halfStroke * signY: 0);
        // not become a vertical line?
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        // not become a horizontal line?
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }
  
      // calculate the bar width and roundess
      var barWidth = Math.abs(left - right);
      var roundness = this._chart.config.options.barRoundness || 0.5;
      var radius = barWidth * roundness * 0.5;
  
      // keep track of the original top of the bar
      var prevTop = top;
  
      // move the top down so there is room to draw the rounded top
      top = prevTop + radius;
      var barRadius = top - prevTop;
  
      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;
  
      // draw the rounded top rectangle
      Chart.helpers.drawRoundedTopRectangle(ctx, left, (top - barRadius + 1), barWidth, bottom - prevTop, barRadius);
  
      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
  
      // restore the original top value so tooltips and scales still work
      top = prevTop;
    },
  });

  Chart.defaults.roundedBar = Chart.helpers.clone(Chart.defaults.bar);

    Chart.controllers.roundedBar = Chart.controllers.bar.extend({
    dataElementType: Chart.elements.RoundedTopRectangle
    });



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
        cutoutPercentage: 60,
        responsive: true,
        maintainAspectRatio : false,
        legend: {
            position: 'top',
            display: false,
            labels: {
                // padding: 20
            }
        },
        layout: {
            padding: {
                top: 20,
                bottom: 0,
                left: 40,
                right: 40
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
    var chart = new Chart(ctx, {
        type: 'bar',
        data: barChartData,
        options: {
            barRoundness: 0.5,
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            legend: {
                display: false
            },
            layout: {
                padding: {
                    bottom: -9,
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    stacked: true,
                    categoryPercentage: 0.80,
                    barPercentage: 0.80,
                    
                    ticks: {
                        fontColor: "#c6d0d5",
                        // display: false,
                    }
                }],
                yAxes: [{
                    stacked: true,
                    // display: false,
                    ticks: {
                        fontColor: "#c6d0d5",
                        // display: false
                    }
                }]
            }
        }
    });

    // Put legend in separate div
    var myLegendContainer = document.getElementById("legend");
    // generate HTML legend
    myLegendContainer.innerHTML = chart.generateLegend();

    // Pie chart
    var ctxPie = document.getElementById('chartCostThisMonth').getContext('2d');
    window.myPie = new Chart(ctxPie, config);
};




// let num = 50;

// const logNum = () => {
//     num = 100;
//     console.log(num);
// }

// logNum();
// console.log(num);

















