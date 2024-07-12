package main

import (
	"errors"
	"fmt"
)

// findCombinations generates all combinations of 'n' elements from 'env'.
func findCombinations(env []string, n int) ([][]string, error) {
	if n <= 0 || n > len(env) {
		return nil, errors.New("invalid value of 'n'")
	}

	// Initialize an empty result slice.
	var result [][]string

	// Create an array of indices to track the current combination.
	indices := make([]int, n)
	for i := range indices {
		indices[i] = i
	}

	for {
		// Create a new combination based on the current indices.
		var currentCombination []string
		for _, idx := range indices {
			currentCombination = append(currentCombination, env[idx])
		}
		result = append(result, currentCombination)

		// Move to the next combination.
		i := n - 1
		for i >= 0 && indices[i] == len(env)-n+i {
			i--
		}
		if i < 0 {
			break // All combinations generated
		}
		indices[i]++
		for j := i + 1; j < n; j++ {
			indices[j] = indices[j-1] + 1
		}
	}

	return result, nil
}

func findGroups(env []string) ([][]string, error) {
	var result [][]string
	for i := 1; i <= len(env); i++ {
		combinations, err := findCombinations(env, i)
		if err != nil {
			return nil, err
		}
		result = append(result, combinations...)
	}
	return result, nil
}

func main() {
	// Example usage:
	env := []string{
		"ft1", "ft2", "ft3", "ft4", "ft5",
		"ft6", "ft7", "ft8", "ft9", "ft10",
		"ft11", "ft12", "ft13", "ft14", "ft15",
	}
	groups, err := findGroups(env)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	for i, comb := range groups {
		fmt.Printf("%d - %s\n", i, comb)
	}
}
