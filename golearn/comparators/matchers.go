package main

import (
	"errors"
	"fmt"
)

// VersionedPod represents a pod with a name and version.
type VersionedPod struct {
	name    string
	version string
}

// touchedPod compares the deployed and reference slices of VersionedPod.
// It returns the names of the deployed pods that have different versions
// from the corresponding reference pods.
func touchedPod(deployed, reference []VersionedPod) ([]string, error) {
	// Create a map to store the reference versions by pod name.
	refVersions := make(map[string]string)
	for _, refPod := range reference {
		refVersions[refPod.name] = refPod.version
	}

	// Initialize the result slice.
	var result []string

	// Compare deployed pods with reference versions.
	for _, depPod := range deployed {
		refVersion, found := refVersions[depPod.name]
		if !found {
			return nil, errors.New("no match found for deployed pod: " + depPod.name)
		}
		if depPod.version != refVersion {
			result = append(result, depPod.name)
		}
	}

	return result, nil
}

func match(left, right []string) bool {
	leftSet := make(map[string]bool)
	for _, item := range left {
		leftSet[item] = true
	}

	for _, item := range right {
		if leftSet[item] {
			return false // Common element found
		}
	}

	return true // No common elements
}

var podMap = map[string][]VersionedPod{
	"A": {
		{name: "pod1", version: "v0"},
		{name: "pod2", version: "v0"},
		{name: "pod3", version: "v1"},
	},
	"B": {
		{name: "pod1", version: "v1"},
		{name: "pod2", version: "v0"},
		{name: "pod3", version: "v0"},
	},
	"C": {
		{name: "pod1", version: "v1"},
		{name: "pod2", version: "v0"},
		{name: "pod3", version: "v0"},
	},
	"ref": {
		{name: "pod1", version: "v0"},
		{name: "pod2", version: "v0"},
		{name: "pod3", version: "v0"},
	},
}

func main() {
	// Example usage
	touchedA, _ := touchedPod(podMap["A"], podMap["ref"])
	touchedB, _ := touchedPod(podMap["B"], podMap["ref"])
	touchedC, _ := touchedPod(podMap["C"], podMap["ref"])

	fmt.Println("Touched A:", touchedA)
	fmt.Println("Touched B:", touchedB)
	fmt.Println("Touched C:", touchedC)

	matched := match(touchedA, touchedB)
	fmt.Println("Match A, B:", matched)

	matched = match(touchedA, touchedC)
	fmt.Println("Match A, C:", matched)

	matched = match(touchedB, touchedC)
	fmt.Println("Match B, C:", matched)

}
