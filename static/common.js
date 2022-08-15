function get_data(type, size) {
    let output = [];
    let max;
    let min;
    if (type === 'hist') {
        max = Math.floor(Math.random() * 100);
        min = max - 500;
        output = [];
        for (let i = 0; i < size; i++) {
            output.push(Math.random() * (max - min) + min);
        }
    } else if (type === 'linear') {
        max = Math.floor(Math.random() * 100);
        min = max - 30;
        output = {'x': [], 'y': []};
        for (let i = 0; i < size; i++) {
            output['x'].push(Math.random() * (max - min) + min);
            output['y'].push(Math.random() * (max - min) + min);
        }
        output.x.sort(function (a, b) {
            return a - b;
        });
        output.y.sort(function (a, b) {
            return a - b;
        });
    }
    return output;
}

$(function () {
    let data_hist = get_data('hist', 1000);
    let data_linear = get_data('linear', 100);

    // -------------------- CURRENT --------------------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                opacity: 0.5,
                nbinsx: 21,
            };
            layout['title'] = 'Гистограмма признака';
            layout['yaxis'] = {
                title: "количество семплов"
            };
            let steps = [];
            for (let s = 1; s < 1001; s += 10) {
                steps.push({
                    label: s,
                    value: s,
                    method: 'restyle',
                    args: ['nbinsx', s]
                })
            }
            layout['sliders'] = [{
                active: 2,
                pad: {
                    t: 60
                },
                currentvalue: {
                    prefix: 'число бинов: ',
                    font: {
                        color: '#888',
                        size: 10
                    }
                },
                steps: steps
            }];
            Plotly.newPlot('id_hist_0', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_0', [plot_data], layout, {responsive: true});
        }
    }

    // --------------------- FIRST ---------------------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                opacity: 0.5,
                marker: {
                    color: '#62a62c',
                    line: {
                        color: '#FFFFFF',
                        width: 1
                    }
                },
                nbinsx: 21,
            };
            layout['title'] = 'Гистограмма признака';
            layout['yaxis'] = {
                title: "количество семплов"
            };
            let steps = [];
            for (let s = 1; s < 1001; s += 10) {
                steps.push({
                    label: s,
                    value: s,
                    method: 'restyle',
                    args: ['nbinsx', s]
                })
            }
            layout['sliders'] = [{
                active: 2,
                pad: {
                    t: 60
                },
                currentvalue: {
                    prefix: 'число бинов: ',
                    font: {
                        color: '#000000',
                        size: 10
                    }
                },
                steps: steps
            }];
            Plotly.newPlot('id_hist_1', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                fill: 'tonexty',
                line: {
                    color: '#62a62c'
                },
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_1', [plot_data], layout, {responsive: true});
        }
    }
})