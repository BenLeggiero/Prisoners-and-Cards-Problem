package PrisonersAndCardsProblem

import BlueBase.*


@ExperimentalUnsignedTypes
class PrisonersAndCardsEngine constructor(
        var numberOfPrisoners: UInt,
        var numberOfTrials: UInt,
        var shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber: Boolean = true,
        var numberOfAllowedAttemptsPerPrisoner: UInt = numberOfPrisoners / 2u
) {

    val numberOfCards get() = numberOfPrisoners


    fun play(): List<Result> = (1u through numberOfTrials).map { playOnce() }


    fun playOnce(): Result =
            CardCage(numberOfCards = numberOfPrisoners).let { cage ->
                (1u through numberOfPrisoners).reduceMutating(Result(0u, 0u)) { result, prisonerNumber ->

                    var currentDrawerNumber = firstDrawerNumber(prisonerNumber = prisonerNumber)

                    (1u through numberOfAllowedAttemptsPerPrisoner).forEach { _ ->
                        val cardNumber = cage.pickCard(drawerNumber = currentDrawerNumber) ?: return@reduceMutating Unit.also {
                            result.lossCount += 1u
                        }

                        if (cardNumber == prisonerNumber) {
                            result.winCount += 1u
                            return@reduceMutating
                        }
                        else {
                            currentDrawerNumber = cardNumber
                        }
                    }

                    result.lossCount += 1u
                }
            }


    private fun firstDrawerNumber(prisonerNumber: UInt) =
            if (shouldPrisonersStartWithCardsInTheDrawerOfTheirOwnNumber) {
                prisonerNumber
            }
            else {
                (1u through numberOfCards).random()
            }



    data class Result(
            var winCount: UInt,
            var lossCount: UInt
    ) {
        val winPercentage: Double
            get() = winCount.toDouble() / lossCount.toDouble()
    }



    private class CardCage(
            private val orderedCards: List<UInt>
    ) {

        constructor(numberOfCards: UInt): this(orderedCards = (1u .. numberOfCards).toList().shuffled())


        fun pickCard(drawerNumber: UInt) =
                if (orderedCards.size.toUInt() >= drawerNumber) {
                    orderedCards[drawerNumber.toInt() - 1]
                }
                else {
                    null
                }
    }
}