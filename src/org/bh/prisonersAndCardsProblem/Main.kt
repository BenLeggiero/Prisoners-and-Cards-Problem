@file:Suppress("PackageDirectoryMismatch", "PackageName", "EXPERIMENTAL_UNSIGNED_LITERALS")

package PrisonersAndCardsProblem

import jQueryInterface.*
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.HTMLCanvasElement
import kotlin.browser.window


@ExperimentalUnsignedTypes
fun main() {
    jq {
        Setup.attachListeners()

        window.setTimeout(Setup::adjustCanvasForCurrentScreen, 1000)

        console.log(PrisonersAndCardsEngine(numberOfPrisoners = 10u, numberOfTrials = 1u).playOnce())
    }
}



object Setup {
    fun attachListeners() {

        jq("html").on("classChange") {
            adjustCanvasForCurrentScreen()
        }

        jq("#begin-button").click {
            print("Gonna go")
        }
    }


    fun adjustCanvasForCurrentScreen() {
        val ratio = window.devicePixelRatio
        val pixelWidth = 800 * ratio
        val pixelHeight = 600 * ratio
        val canvasJq = jq("#output-canvas")
        canvasJq.css("width", "800")
        canvasJq.css("height", "600")
        canvasJq.attr("width", pixelWidth)
        canvasJq.attr("height", pixelHeight)
        canvasJq.data("pixelWidth", pixelWidth)
        canvasJq.data("pixelHeight", pixelHeight)
        canvasJq.data("pixelRatio", ratio)

//        val canvas = canvasJq[0] as? HTMLCanvasElement ?: return
//        val fontSize = ratio * 24
//        val context = canvas.getContext("2d") as? CanvasRenderingContext2D ?: return
//        context.clearRect(0.0, 0.0, pixelWidth, pixelHeight)
//        context.fillStyle = "currentcolor"
//        context.font = "${fontSize}px sans-serif"
//        context.fillText("Press the \"${jq("#begin-button").text().ifEmpty { "Go" }}\" button to go!", 0.0, fontSize)
    }
}
