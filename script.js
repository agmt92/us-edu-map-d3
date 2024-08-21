const margin = { top: 100, right: 75, bottom: 0, left: 350 };
const width = 1100;
const height = 660;

const svg = d3.select("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);


const path = d3.geoPath();

const color = d3.scaleThreshold()
    .domain([3, 12, 21, 30, 39, 48, 57, 66])
    .range(d3.schemeBlues[9]);

const tooltip = d3.select("body").append("div")
    .attr("id", "tooltip")
    .style("position", "absolute")
    .style("text-align", "center")
    .style("width", "auto")
    .style("padding", "8px")
    .style("font", "14px sans-serif")
    .style("background", "rgba(0, 0, 0, 0.7)")
    .style("color", "#fff")
    .style("border-radius", "5px")
    .style("pointer-events", "none")
    .style("opacity", 0)
    .style("transition", "opacity 0.3s ease-in-out");

Promise.all([
    d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"),
    d3.json("https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json")
]).then(([us, education]) => {
    const educationById = {};
    education.forEach(d => {
        educationById[d.fips] = d;
    });

    svg.append("g")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.counties).features)
        .enter().append("path")
        .attr("class", "county")
        .attr("fill", d => {
            const data = educationById[d.id];
            return data ? color(data.bachelorsOrHigher) : '#ccc';
        })
        .attr("d", path)
        .attr("data-fips", d => d.id)
        .attr("data-education", d => {
            const data = educationById[d.id];
            return data ? data.bachelorsOrHigher : '';
        })
        .attr("data-area-name", d => {
            const data = educationById[d.id];
            return data ? data.area_name : '';
        }
        )
        .style("stroke", "#fff")
        .style("stroke-width", "0.5px")
        .on("mouseover", function (event, d) {
            const data = educationById[d.id];

            d3.select(this)
                .style("stroke", "#000")
                .style("stroke-width", "1px")
                .attr("data-education", d => {
                    const data = educationById[d.id];
                    return data ? data.bachelorsOrHigher : '';
                })
                .attr("data-area-name", d => {
                    const data = educationById[d.id];
                    return data ? data.area_name : '';
                }
                )

            tooltip.transition()
                .duration(200)
                .style("opacity", 0.9);
            tooltip.html(`
                <strong>${data.area_name}, ${data.state}</strong><br>
                Bachelor's Degree or Higher: ${data.bachelorsOrHigher}%
            `)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 28) + "px");
        })
        .on("mousemove", function (event) {
            tooltip.style("left", (event.pageX + 10) + "px")
                   .style("top", (event.pageY - 28) + "px");
        })
        .on("mouseout", function () {
            d3.select(this)
                .style("stroke", "#fff")
                .style("stroke-width", "0.5px");

            tooltip.transition()
                .duration(200)
                .style("opacity", 0);
        });
    

    const x = d3.scaleLinear()
        .domain([2, 66])
        .rangeRound([600, 860]);
    
    svg.append("text")
        .attr("class", "title")
        .attr("id","title")
        .attr("transform", "translate(0,-50)")
        .text("United States Educational Attainment")
        .attr("font-size","4em")
        
        svg.append("text")
        .attr("class", "description")
        .attr("id","description")
        .attr("transform", "translate(0,-10)")
        .text(" Percentage of adults age 25 and older with a bachelor's degree or higher (2010-2014) ")
        .attr("font-size","2em")
    

    const g = svg.append("g")
        .attr("class", "key")
        .attr("transform", "translate(0,40)");

    g.selectAll("rect")
        .data(color.range().map(d => {
            d = color.invertExtent(d);
            if (d[0] == null) d[0] = x.domain()[0];
            if (d[1] == null) d[1] = x.domain()[1];
            return d;
        }))
        .enter().append("rect")
        .attr("height", 8)
        .attr("x", d => x(d[0]))
        .attr("width", d => x(d[1]) - x(d[0]))
        .attr("fill", d => color(d[0]));

    g.append("text")
        .attr("class", "caption")
        .attr("id", "legend")
        .attr("x", x.range()[0])
        .attr("y", -6)
        .attr("fill", "#333")
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .text("Bachelor's degree or higher");

    g.call(d3.axisBottom(x)
        .tickSize(13)
        .tickFormat(d => d + "%")
        .tickValues(color.domain()))
        .select(".domain")
        .remove();

});