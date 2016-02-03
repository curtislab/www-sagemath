var options = {
  valueNames: [ 'title', 'format', 'category', 'research', 'affiliation', 'position' ]
};

var contentList = new List('content-list', options);

$('#search-reset').click(function() {
  $('#search-field').val('');
  contentList.filter();
  contentList.search();
  return false;
});

$('#filter-ucc').click(function() {
  contentList.filter(function(item) {
    if (item.values().affiliation == "University of Cape Coast (UCC)") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-inrab').click(function() {
  contentList.filter(function(item) {
    if (item.values().affiliation == "INRAB") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-uac').click(function() {
  contentList.filter(function(item) {
    if (item.values().affiliation == "University of Abomey Calavi") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-iita').click(function() {
  contentList.filter(function(item) {
    if (item.values().affiliation == "IITA") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-cirad').click(function() {
  contentList.filter(function(item) {
    if (item.values().affiliation == "CIRAD") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-photo').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Photo") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-literature').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Literature") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-review').click(function() {
  contentList.filter(function(item) {
    if (item.values().format == "Review") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-finance').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Finance") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-education').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Education") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});


$('#filter-technology').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Technology") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-science').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Science") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});

$('#filter-fun').click(function() {
  contentList.filter(function(item) {
    if (item.values().category == "Fun") {
      return true;
    } else {
      return false;
    }
  });
  return false;
});
