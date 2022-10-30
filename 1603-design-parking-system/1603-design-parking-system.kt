class ParkingSystem(private val big: Int, private val medium: Int, private val small: Int) {

    private var currBig = 0
    private var currMedium = 0
    private var currSmall = 0

    fun addCar(carType: Int): Boolean {
        when (carType) {
            1 -> {
                if (currBig == big) return false
                currBig++
            }

            2 -> {
                if (currMedium == medium) return false
                currMedium++
            }

            3 -> {
                if (currSmall == small) return false
                currSmall++
            }
        }
        return true
    }

}
