package v1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestReadScan(t *testing.T) {

	m := SortByMapKeyOrValue()

	assert.Len(t, m, 3)
}
