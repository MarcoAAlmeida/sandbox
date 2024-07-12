package main

import (
	"fmt"
)

// Function to generate sorted keys
func sortedKey(left, right string) string {
	if left < right {
		return left + "_" + right
	}
	return right + "_" + left
}

// Expensive match function (replace with your actual implementation)
func match(left, right string) bool {
	// Your expensive calculation here
	// For demonstration purposes, let's assume it always returns true
	return true
}

func main() {
	// Create a cache (map) for storing results
	cache := make(map[string]bool)

	// Example usage
	inputA, inputB := "A", "B"
	key := sortedKey(inputA, inputB)

	// Check if result is already cached
	if result, ok := cache[key]; ok {
		fmt.Printf("Result for %s: %v (from cache)\n", key, result)
	} else {
		// Calculate and store result
		result := match(inputA, inputB)
		cache[key] = result
		fmt.Printf("Result for %s: %v (calculated)\n", key, result)
	}
}
