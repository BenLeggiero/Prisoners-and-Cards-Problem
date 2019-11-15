package BlueBase



//@Suppress("NOTHING_TO_INLINE")
//inline infix fun <T : Comparable<T>> T.through(that: T): ClosedRange<T> = this.rangeTo(that)
//
//
//@Suppress("NOTHING_TO_INLINE")
//@ExperimentalUnsignedTypes
//inline infix fun UByte.through(other: UByte) = this.rangeTo(other)
//
//
//@Suppress("NOTHING_TO_INLINE")
//@ExperimentalUnsignedTypes
//inline infix fun UShort.through(other: UShort) = this.rangeTo(other)


@Suppress("NOTHING_TO_INLINE")
@ExperimentalUnsignedTypes
inline infix fun UInt.through(other: UInt) = this.rangeTo(other)


//@Suppress("NOTHING_TO_INLINE")
//@ExperimentalUnsignedTypes
//inline infix fun ULong.through(other: ULong) = this.rangeTo(other)
