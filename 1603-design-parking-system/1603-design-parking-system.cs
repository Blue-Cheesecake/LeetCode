public class ParkingSystem
{

  private int Big { get; set; }
  private int Medium { get; set; }
  private int Small { get; set; }

  public ParkingSystem(int big, int medium, int small)
  {
    Big = big;
    Medium = medium;
    Small = small;
  }


  public bool AddCar(int carType)
  {
    // small
    if (carType == 3 && Small - 1 >= 0)
    {
      Small -= 1;
      return true;
    }
    // medium
    if (carType == 2 && Medium - 1 >= 0)
    {
      Medium -= 1;
      return true;
    }
    // big
    if (carType == 1 && Big - 1 >= 0)
    {
      Big -= 1;
      return true;
    }
    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * ParkingSystem obj = new ParkingSystem(big, medium, small);
 * bool param_1 = obj.AddCar(carType);
 */