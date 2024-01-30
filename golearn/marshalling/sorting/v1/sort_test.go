package v1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestSortScans(t *testing.T) {
	sortedDependencies := SortDependenciesByNameReversed()

	assert.Len(t, sortedDependencies, 3)
	assert.Equal(t, sortedDependencies[0].Name, "spring-boot-starter")

}

func TestSortByMapKeyOrValue(t *testing.T) {

	m := SortByMapKeyOrValue()

	assert.Len(t, m, 3)
}
