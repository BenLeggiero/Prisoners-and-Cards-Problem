---
title: The Prisoners-and-Cards Problem
---

# What is this? #

This is a math problem similar to the [Monty Hall Problem](https://en.wikipedia.org/wiki/Monty_Hall_problem). For a complete explanation and demonstration, see the following video:



<iframe width="560" height="315" src="https://www.youtube.com/embed/a1DUUnhk3uE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>[The unbelievable solution to the 100 prisoner puzzle.
 - YouTube](https://youtu.be/a1DUUnhk3uE)</iframe>


# Configure #

* <label class="config-input-line">Number of Contestants: <input type="number" name="contestant-count" id="contestant-count" min="2" value="10" /></label>
* <label class="config-input-line">Number of Trials: <input type="number" name="trials-count" id="trials-count" min="1" value="1" /></label>
* <label class="config-input-line"><input type="checkbox" name="shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber" /> Should prisoners start with cards in the drawer of their own number?</label>
* <label class="config-input-line"><input type="checkbox" name="shouldPrisonersSelectTheDrawerWithTheSameNumberAsTheCardTheyDrew" /> Should prisoners select the drawer with the same number as the card they drew?</label>
{:#config-list}

<button id="begin-button">Go!</button>


# Chart of Progress #

<div class="ct-chart ct-perfect-fourth"></div>
<script>
var data = {
    // A labels array that can contain any sort of values
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    // Our series array that contains series objects or in this case series data arrays
    series: [
        [5, 2, 4, 2, 0]
    ]
}

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
var options = {
  height: 300,
  plugins: [
    Chartist.plugins.ctPointLabels(/*{
      textAnchor: 'middle',
      labelInterpolationFnc: function(value) {return '$' + value.toFixed(2)}
    }*/)
  ]
}

// Create a new line chart object where as first parameter we pass in a selector
// that is resolving to our chart container element. The Second parameter
// is the actual data object.
new Chartist.Line('.ct-chart', data, options)
</script>
