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
                title: 'Гистограмма признака',
                xaxis: {
                    title: {
                        text: "значение признака"
                    },
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: {
                        text: 'количество семплов'
                    },
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    family: 'Arial, sans-serif',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                opacity: 0.5,
                marker: {
                    color: '#62a62c',
                    line: {
                        color: '#007002',
                        width: 2
                    }
                },
                nbinsx: 21,
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
                title: 'Плотность распределения вероятности',
                xaxis: {
                    title: {
                        text: "значение признака"
                    },
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: {
                        text: 'вероятность'
                    },
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    family: 'Arial, sans-serif',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                fill: 'tonexty',
                line: {
                    color: '#62a62c'
                }
            };
            Plotly.newPlot('id_linear_1', [plot_data], layout, {responsive: true});
        }
    }

    // --------------------- SECOND ---------------------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                font: {
                    family: 'Courier, monospace',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                opacity: 0.5,
                marker: {
                    color: '#969d8e',
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
            Plotly.newPlot('id_hist_2', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                font: {
                    family: 'Courier, monospace',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                mode: 'lines+markers',
                fill: 'tonexty',
                line: {
                    color: '#969d8e',
                    opacity: 0.5
                },
                marker: {
                    symbol: 'circle',
                    size: 8
                }
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_2', [plot_data], layout, {responsive: true});
        }
    }

    // --------------- FIRST INTERMEDIATE ----------------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                title: 'Гистограмма признака',
                xaxis: {
                    title: "значение признака",
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: "количество семплов",
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    family: 'Courier, monospace',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                opacity: 0.5,
                marker: {
                    color: '#6b6b6b',
                    line: {
                        color: '#000000',
                        width: 2.5
                    }
                },
                nbinsx: 21,
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
            Plotly.newPlot('id_hist_1_int', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                font: {
                    family: 'Courier, monospace',
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                mode: 'markers',
                fill: 'tonexty',
                line: {
                    color: '#969d8e',
                    opacity: 0.5
                },
                marker: {
                    symbol: 'circle',
                    size: 8,
                    color: '#767676'
                }
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_1_int', [plot_data], layout, {responsive: true});
        }
    }

    // ----------- FIRST BASED ON INTERMEDIATE -----------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                title: 'Гистограмма признака',
                xaxis: {
                    title: "значение признака",
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: "количество семплов",
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                marker: {
                    color: 'rgba(143,143,143,0.3)',
                    line: {
                        color: '#000000',
                        width: 2
                    }
                },
                nbinsx: 21,
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
            Plotly.newPlot('id_hist_1_bsd', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                yaxis: {
                    showline: true,
                    title: "вероятность"
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                mode: 'lines+markers',
                fill: 'tonexty',
                fillcolor: 'rgba(143,143,143,0.3)',
                line: {
                    color: '#000000',
                    opacity: 0.75
                },
                marker: {
                    symbol: 'circle',
                    size: 5,
                    color: '#000000'
                }
            };
            layout['title'] = 'Плотность распределения вероятности';
            Plotly.newPlot('id_linear_1_bsd', [plot_data], layout, {responsive: true});
        }
    }

    // ----------- SECOND BASED ON INTERMEDIATE -----------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                title: 'Гистограмма признака',
                xaxis: {
                    title: "значение признака",
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: "количество семплов",
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                marker: {
                    color: 'rgba(143,143,143,0.3)',
                    line: {
                        color: '#4d4d4d',
                        width: 2
                    }
                },
                nbinsx: 21,
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
            Plotly.newPlot('id_hist_2_bsd', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                yaxis: {
                    showline: true,
                    title: "вероятность"
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                mode: 'lines+markers',
                fill: 'tonexty',
                fillcolor: 'rgba(143,143,143,0.3)',
                line: {
                    color: '#4d4d4d',
                },
                marker: {
                    symbol: 'circle',
                    size: 5,
                    color: '#4d4d4d'
                }
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_2_bsd', [plot_data], layout, {responsive: true});
        }
    }

    // ----------------- FIRST ADDITIONAL -----------------
    {
        {
            let layout = {
                height: 700,
                autosize: true,
                title: 'Гистограмма признака',
                xaxis: {
                    title: "значение признака",
                    showline: true,
                    linecolor: '#000000',
                    showgrid: true,
                },
                yaxis: {
                    title: "количество семплов",
                    showline: true,
                    linecolor: '#000000',
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_hist,
                type: 'histogram',
                marker: {
                    color: 'rgba(98,166,44,0.3)',
                    line: {
                        color: '#63b623',
                        width: 2
                    }
                },
                nbinsx: 21,
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
            Plotly.newPlot('id_hist_1_add', [plot_data], layout, {responsive: true});
        }
        {
            let layout = {
                height: 700,
                autosize: true,
                xaxis: {
                    title: {
                        text: "значение признака"
                    }
                },
                yaxis: {
                    showline: true,
                    title: "вероятность"
                },
                font: {
                    size: 12,
                    color: '#000000'
                }
            };
            let plot_data = {
                x: data_linear['x'],
                y: data_linear['y'],
                type: 'scatter',
                mode: 'lines+markers',
                fill: 'tonexty',
                fillcolor: 'rgba(98,166,44,0.3)',
                line: {
                    color: '#63b623',
                    width: 3
                },
                marker: {
                    symbol: 'circle',
                    size: 5,
                    color: '#63b623'
                }
            };
            layout['title'] = 'Плотность распределения вероятности';
            layout['yaxis'] = {
                title: "вероятность"
            }
            Plotly.newPlot('id_linear_1_add', [plot_data], layout, {responsive: true});
        }
    }
})
