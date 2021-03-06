/**
 * CollectionOfExtractors - combines the features from several feature extractors. 
 */

/**
 * @param extractors - an array of other feature extractors. 
 * @param sample - a string.
 * @param features an initial hash of features (optional).
 * @return a hash with all features generated from the sample by the different extractors
 */
module.exports = function(extractors) {
	return function(sample, features) {
		if (!features) features = {};
		for (var i=0; i<extractors.length; ++i)
			extractors[i](sample, features);
		return features;
	}
}

