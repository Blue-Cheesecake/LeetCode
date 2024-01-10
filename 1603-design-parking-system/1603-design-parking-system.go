type ParkingSystem struct {
	bigMaxCapa     int
	bigCurrCapa    int
	mediumMaxCapa  int
	mediumCurrCapa int
	smallMaxCapa   int
	smallCurrCapa  int
}

func Constructor(big int, medium int, small int) ParkingSystem {
	return ParkingSystem{bigMaxCapa: big, mediumMaxCapa: medium, smallMaxCapa: small}
}

func (this *ParkingSystem) AddCar(carType int) bool {
	isValid := false

	switch carType {
	case 1:
		if this.bigCurrCapa < this.bigMaxCapa {
			this.bigCurrCapa++
			isValid = true
		}
	case 2:
		if this.mediumCurrCapa < this.mediumMaxCapa {
			this.mediumCurrCapa++
			isValid = true
		}
	case 3:
		if this.smallCurrCapa < this.smallMaxCapa {
			this.smallCurrCapa++
			isValid = true
		}
	}

	return isValid
}


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * obj := Constructor(big, medium, small);
 * param_1 := obj.AddCar(carType);
 */