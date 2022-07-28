var number = [-1, -2, -3, -4, -5];
var target = -8;

// function
twoSum(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    var target_in_array = target - nums[i];
    if (nums.contains(target_in_array)) {
      var index_target = nums.indexOf(target_in_array);
      var number = [i, index_target];
      if (target_in_array + nums[i] == target && i != index_target) {
        return number;
        break;
      }
    }
  }
}

void main() {
  print(twoSum(number, target));
}
