package v1

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestReadScan(t *testing.T) {

	m := readFromFile()

	assert.Len(t, m.Dependencies, 3)
}
