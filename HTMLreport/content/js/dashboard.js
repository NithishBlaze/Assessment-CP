/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.8863636363636364, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [1.0, 500, 1500, "Cloud Services-1"], "isController": false}, {"data": [1.0, 500, 1500, "Cloud Services"], "isController": false}, {"data": [1.0, 500, 1500, "Cloud Services-0"], "isController": false}, {"data": [0.5, 500, 1500, "Newsroom"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design-1"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design-0"], "isController": false}, {"data": [1.0, 500, 1500, "Value Analysis-0"], "isController": false}, {"data": [1.0, 500, 1500, "Value Analysis-1"], "isController": false}, {"data": [1.0, 500, 1500, "Webinar-1"], "isController": false}, {"data": [1.0, 500, 1500, "Webinar-0"], "isController": false}, {"data": [1.0, 500, 1500, "About-1"], "isController": false}, {"data": [1.0, 500, 1500, "About-0"], "isController": false}, {"data": [1.0, 500, 1500, "Contact-0"], "isController": false}, {"data": [1.0, 500, 1500, "Contact-1"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Customer Experience-0"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Customer Experience-1"], "isController": false}, {"data": [1.0, 500, 1500, "Engineering Analysis"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation-0"], "isController": false}, {"data": [0.0, 500, 1500, "Home Page"], "isController": false}, {"data": [1.0, 500, 1500, "Value Analysis"], "isController": false}, {"data": [1.0, 500, 1500, "Design Automation-1"], "isController": false}, {"data": [0.0, 500, 1500, "Blog"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study"], "isController": false}, {"data": [0.5, 500, 1500, "Blog-0"], "isController": false}, {"data": [1.0, 500, 1500, "Newsroom-0"], "isController": false}, {"data": [0.5, 500, 1500, "Home Page-1"], "isController": false}, {"data": [1.0, 500, 1500, "Engineering Analysis-0"], "isController": false}, {"data": [1.0, 500, 1500, "Newsroom-2"], "isController": false}, {"data": [1.0, 500, 1500, "Engineering Analysis-1"], "isController": false}, {"data": [0.5, 500, 1500, "Blog-1"], "isController": false}, {"data": [1.0, 500, 1500, "Newsroom-1"], "isController": false}, {"data": [0.5, 500, 1500, "Home Page-0"], "isController": false}, {"data": [1.0, 500, 1500, "Product Design"], "isController": false}, {"data": [1.0, 500, 1500, "Careers-2"], "isController": false}, {"data": [1.0, 500, 1500, "Careers-1"], "isController": false}, {"data": [1.0, 500, 1500, "Webinar"], "isController": false}, {"data": [1.0, 500, 1500, "Careers-0"], "isController": false}, {"data": [0.5, 500, 1500, "Careers"], "isController": false}, {"data": [1.0, 500, 1500, "About"], "isController": false}, {"data": [1.0, 500, 1500, "Contact"], "isController": false}, {"data": [1.0, 500, 1500, "Digital Customer Experience"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study-0"], "isController": false}, {"data": [1.0, 500, 1500, "Case Study-1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 44, 0, 0.0, 366.27272727272725, 159, 2081, 193.0, 996.0, 1401.25, 2081.0, 5.443523444265742, 185.25788112396387, 1.0010883180749721], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Cloud Services-1", 1, 0, 0.0, 177.0, 177, 177, 177.0, 177.0, 177.0, 177.0, 5.649717514124294, 389.7091278248588, 0.7944915254237288], "isController": false}, {"data": ["Cloud Services", 1, 0, 0.0, 337.0, 337, 337, 337.0, 337.0, 337.0, 337.0, 2.967359050445104, 206.30679710682492, 0.8229784866468842], "isController": false}, {"data": ["Cloud Services-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.41796875, 0.8544921875], "isController": false}, {"data": ["Newsroom", 1, 0, 0.0, 515.0, 515, 515, 515.0, 515.0, 515.0, 515.0, 1.941747572815534, 69.71139259708738, 0.7224666262135923], "isController": false}, {"data": ["Product Design-1", 1, 0, 0.0, 189.0, 189, 189, 189.0, 189.0, 189.0, 189.0, 5.291005291005291, 128.59106316137567, 0.8008845899470899], "isController": false}, {"data": ["Product Design-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.55224609375, 0.921630859375], "isController": false}, {"data": ["Value Analysis-0", 1, 0, 0.0, 159.0, 159, 159, 159.0, 159.0, 159.0, 159.0, 6.289308176100629, 3.5745872641509435, 0.9274272798742138], "isController": false}, {"data": ["Value Analysis-1", 1, 0, 0.0, 169.0, 169, 169, 169.0, 169.0, 169.0, 169.0, 5.9171597633136095, 140.12805103550295, 0.8956638313609467], "isController": false}, {"data": ["Webinar-1", 1, 0, 0.0, 171.0, 171, 171, 171.0, 171.0, 171.0, 171.0, 5.847953216374268, 247.3787006578947, 0.7881030701754386], "isController": false}, {"data": ["Webinar-0", 1, 0, 0.0, 165.0, 165, 165, 165.0, 165.0, 165.0, 165.0, 6.0606060606060606, 3.243371212121212, 0.7930871212121212], "isController": false}, {"data": ["About-1", 1, 0, 0.0, 195.0, 195, 195, 195.0, 195.0, 195.0, 195.0, 5.128205128205129, 346.4593349358974, 0.6260016025641025], "isController": false}, {"data": ["About-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.18603515625, 0.738525390625], "isController": false}, {"data": ["Contact-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.21044921875, 0.750732421875], "isController": false}, {"data": ["Contact-1", 1, 0, 0.0, 183.0, 183, 183, 183.0, 183.0, 183.0, 183.0, 5.46448087431694, 251.37679303278688, 0.6777237021857924], "isController": false}, {"data": ["Design Automation", 1, 0, 0.0, 328.0, 328, 328, 328.0, 328.0, 328.0, 328.0, 3.048780487804878, 72.25967035060975, 0.9289253048780487], "isController": false}, {"data": ["Digital Customer Experience-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.57666015625, 0.933837890625], "isController": false}, {"data": ["Digital Customer Experience-1", 1, 0, 0.0, 200.0, 200, 200, 200.0, 200.0, 200.0, 200.0, 5.0, 408.017578125, 0.7666015625], "isController": false}, {"data": ["Engineering Analysis", 1, 0, 0.0, 350.0, 350, 350, 350.0, 350.0, 350.0, 350.0, 2.857142857142857, 65.10044642857143, 0.8872767857142858], "isController": false}, {"data": ["Design Automation-0", 1, 0, 0.0, 159.0, 159, 159, 159.0, 159.0, 159.0, 159.0, 6.289308176100629, 3.611438679245283, 0.9458529874213837], "isController": false}, {"data": ["Home Page", 1, 0, 0.0, 2081.0, 2081, 2081, 2081.0, 2081.0, 2081.0, 2081.0, 0.4805382027871216, 28.034992942095148, 0.11074903892359443], "isController": false}, {"data": ["Value Analysis", 1, 0, 0.0, 328.0, 328, 328, 328.0, 328.0, 328.0, 328.0, 3.048780487804878, 73.93292682926828, 0.911061356707317], "isController": false}, {"data": ["Design Automation-1", 1, 0, 0.0, 168.0, 168, 168, 168.0, 168.0, 168.0, 168.0, 5.952380952380952, 137.66043526785714, 0.9184337797619047], "isController": false}, {"data": ["Blog", 1, 0, 0.0, 1508.0, 1508, 1508, 1508.0, 1508.0, 1508.0, 1508.0, 0.6631299734748011, 87.9087574602122, 0.17225837201591512], "isController": false}, {"data": ["Case Study", 1, 0, 0.0, 354.0, 354, 354, 354.0, 354.0, 354.0, 354.0, 2.824858757062147, 167.3011564265537, 0.7669050141242938], "isController": false}, {"data": ["Blog-0", 1, 0, 0.0, 513.0, 513, 513, 513.0, 513.0, 513.0, 513.0, 1.949317738791423, 0.6396198830409356, 0.24937560916179335], "isController": false}, {"data": ["Newsroom-0", 1, 0, 0.0, 162.0, 162, 162, 162.0, 162.0, 162.0, 162.0, 6.172839506172839, 3.1828703703703702, 0.7474922839506173], "isController": false}, {"data": ["Home Page-1", 1, 0, 0.0, 998.0, 998, 998, 998.0, 998.0, 998.0, 998.0, 1.002004008016032, 57.955755260521045, 0.11742234468937876], "isController": false}, {"data": ["Engineering Analysis-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.62548828125, 0.958251953125], "isController": false}, {"data": ["Newsroom-2", 1, 0, 0.0, 192.0, 192, 192, 192.0, 192.0, 192.0, 192.0, 5.208333333333333, 181.60502115885416, 0.6561279296875], "isController": false}, {"data": ["Engineering Analysis-1", 1, 0, 0.0, 189.0, 189, 189, 189.0, 189.0, 189.0, 189.0, 5.291005291005291, 117.48718584656085, 0.8318865740740741], "isController": false}, {"data": ["Blog-1", 1, 0, 0.0, 994.0, 994, 994, 994.0, 994.0, 994.0, 994.0, 1.006036217303823, 133.03650025150907, 0.13263172786720323], "isController": false}, {"data": ["Newsroom-1", 1, 0, 0.0, 161.0, 161, 161, 161.0, 161.0, 161.0, 161.0, 6.211180124223602, 3.2147709627329193, 0.7763975155279503], "isController": false}, {"data": ["Home Page-0", 1, 0, 0.0, 1081.0, 1081, 1081, 1081.0, 1081.0, 1081.0, 1081.0, 0.9250693802035153, 0.46343807816836263, 0.10479301572617947], "isController": false}, {"data": ["Product Design", 1, 0, 0.0, 349.0, 349, 349, 349.0, 349.0, 349.0, 349.0, 2.865329512893983, 71.26667711318052, 0.8562410458452723], "isController": false}, {"data": ["Careers-2", 1, 0, 0.0, 195.0, 195, 195, 195.0, 195.0, 195.0, 195.0, 5.128205128205129, 291.9270833333333, 0.641025641025641], "isController": false}, {"data": ["Careers-1", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.22265625, 0.775146484375], "isController": false}, {"data": ["Webinar", 1, 0, 0.0, 337.0, 337, 337, 337.0, 337.0, 337.0, 337.0, 2.967359050445104, 127.11250463649851, 0.7882047477744807], "isController": false}, {"data": ["Careers-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.21044921875, 0.750732421875], "isController": false}, {"data": ["Careers", 1, 0, 0.0, 516.0, 516, 516, 516.0, 516.0, 516.0, 516.0, 1.937984496124031, 112.31604287790698, 0.7153888081395349], "isController": false}, {"data": ["About", 1, 0, 0.0, 355.0, 355, 355, 355.0, 355.0, 355.0, 355.0, 2.8169014084507045, 191.7446082746479, 0.6767165492957746], "isController": false}, {"data": ["Contact", 1, 0, 0.0, 343.0, 343, 343, 343.0, 343.0, 343.0, 343.0, 2.9154518950437316, 135.61406705539358, 0.711780247813411], "isController": false}, {"data": ["Digital Customer Experience", 1, 0, 0.0, 361.0, 361, 361, 361.0, 361.0, 361.0, 361.0, 2.770083102493075, 227.63374307479225, 0.8385993767313019], "isController": false}, {"data": ["Case Study-0", 1, 0, 0.0, 160.0, 160, 160, 160.0, 160.0, 160.0, 160.0, 6.25, 3.38134765625, 0.836181640625], "isController": false}, {"data": ["Case Study-1", 1, 0, 0.0, 194.0, 194, 194, 194.0, 194.0, 194.0, 194.0, 5.154639175257732, 302.4927512886598, 0.7097696520618556], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 44, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
