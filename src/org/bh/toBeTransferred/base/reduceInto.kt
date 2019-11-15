package BlueBase




//fun <Element, Result> Iterable<Element>.reduceInto(result: Result, reducer: (Result, Element) -> Result): Result {
//    var localResultCopy = result
//    this.forEach {
//        localResultCopy = reducer(localResultCopy, it)
//    }
//    return localResultCopy
//}




fun <Element, Result> Iterable<Element>.reduceMutating(result: Result, reducer: (Result, Element) -> Unit): Result {
    return result.let { localResultCopy ->
        this.forEach { reducer(localResultCopy, it) }
        return@let localResultCopy
    }
}
